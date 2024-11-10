"use client";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import ContentField from "../textCard/ContentField";

interface IContactCTAProps {
  startTitle: string;
  endTitle: string;
  highlights: string;
  subHeading: string;
  description: string;
}

const ContactUsForm: React.FC<IContactCTAProps> = ({
  startTitle,
  highlights,
  endTitle,
  subHeading,
  description,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captchaDigits, setCaptchaDigits] = useState<any>({
    fn: 0,
    sn: 0,
  });
  const [captchaMsg, setCaptchaMsg] = useState<string>("");
  const [captchaInput, setCaptchaInput] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const captchaTotal: number = captchaDigits.fn + captchaDigits.sn;
    if (captchaTotal === captchaInput) {
      console.log("verifed", captchaTotal, captchaInput);
      setCaptchaMsg(
        "Your details has been submitted successfully. We will contact you soon!"
      );
      setCaptchaDigits({
        fn: getRandomNumber(),
        sn: getRandomNumber(),
      });
      console.log("Form submitted:", formData);
    } else {
      setCaptchaDigits({
        fn: getRandomNumber(),
        sn: getRandomNumber(),
      });
      setCaptchaMsg("Please provide correct answer before submitting!");
    }
  };

  const getRandomNumber = () => Number(Math.round(Math.random() * 10));

  useEffect(() => {
    setCaptchaDigits({
      fn: getRandomNumber(),
      sn: getRandomNumber(),
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex text-left items-center">
          <ContentField
            subTitle={subHeading}
            startTitle={startTitle}
            endTitle={endTitle}
            highlights={highlights}
            description={description}
          />
        </div>
        <div className="text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="bg-transparent">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-semibold border-b-2 rounded bg-transparent mt-1 block w-full px-4 py-2 focus:outline-none"
                  placeholder="Enter your name"
                />
                <div
                  className="text-red-500 text-sm mt-1 hidden"
                  data-error-for="name"
                >
                  Name is required
                </div>
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-semibold border-b-2 rounded bg-transparent mt-1 block w-full px-4 py-2 focus:outline-none"
                  placeholder="Enter your email"
                />
                <div
                  className="text-red-500 text-sm mt-1 hidden"
                  data-error-for="email"
                >
                  Please enter a valid email
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="font-semibold border-b-2 rounded bg-transparent mt-1 block w-full px-4 py-2 focus:outline-none"
                placeholder="Enter your subject"
              />
              <div
                className="text-red-500 text-sm mt-1 hidden"
                data-error-for="subject"
              >
                Subject is required
              </div>
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="font-semibold border-b-2 rounded bg-transparent mt-1 block w-full px-4 py-2 focus:outline-none"
                placeholder="Enter your message"
              />
              <div
                className="text-red-500 text-sm mt-1 hidden"
                data-error-for="message"
              >
                Message is required
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-left">
              <p className="mb-4 inline-block">
                Please enter the answer to continue:{" "}
                <span className="border">
                  {" "}
                  {captchaDigits.fn} + {captchaDigits.sn} ={" "}
                  <input
                    type="text"
                    name="Answer"
                    value={captchaInput ? captchaInput : 0}
                    onChange={(e) => setCaptchaInput(parseInt(e.target.value))}
                    required
                    className="bg-transparent mt-1 inline-block focus:outline-none"
                  />{" "}
                </span>
              </p>
              {captchaMsg && <p className="mb-4">{captchaMsg}</p>}
              <Button
                label="Submit Now"
                variant="stylist"
                size="large"
                onClick={() => handleSubmit}
                style={{ display: "block", width: "100%" }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
