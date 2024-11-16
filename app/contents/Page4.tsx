"use client";
import { useVisibility } from "../hooks/useVisibility";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "IDLE" | "LOADING" | "SUCCESS" | "ERROR";

export default function Page4({ onVisible, language }: any) {
  const { sectionRef, isInView } = useVisibility("section4", onVisible);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);
  const getText = (ko: string, en: string) => (language === "ko" ? ko : en);
  const [status, setStatus] = useState<FormStatus>("IDLE");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("IDLE");

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="section4"
      ref={sectionRef}
      className="section m-auto relative min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="text-center mb-12">
          <div className={`titleBox relative inline-block`}>
            {getText("연락하기", "Contact")}
            <div
              className={`
          absolute -bottom-0.5 left-0 h-4 bg-indigo-400
          transition-all duration-1000 ease-out
          ${isVisible ? "w-[calc(100%)]" : "w-0"}
        `}
              style={{
                zIndex: -1,
                transform: "skew(-10deg)",
              }}
            />
          </div>
        </div>
        <div className="p-3">
          <form
            onSubmit={submitForm}
            className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-white text-lg font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-white text-lg font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-white text-lg font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 md:h-48 lg:h-56 text-lg"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={status === "LOADING"}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-lg disabled:opacity-50"
              >
                {status === "LOADING"
                  ? getText("전송 중...", "Sending...")
                  : getText("전송", "Send")}
              </button>

              {status === "SUCCESS" && (
                <p className="text-green-400 text-lg font-semibold bg-green-100 bg-opacity-20 py-2 px-4 rounded animate-fade-in-down">
                  Thanks!
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-red-400 text-lg font-semibold bg-red-100 bg-opacity-20 py-2 px-4 rounded animate-fade-in-down">
                  Ooops! There was an error.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
