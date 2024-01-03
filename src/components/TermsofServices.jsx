import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";

const TermsofServices = () => {
  const Changes = [
    {
      title: "Electronic Communications",
      description:
        "By using our Services, you consent to receive electronic communications from us. These may include notices about your account and information concerning or related to the Services.            ",
    },
    {
      title: "Indemnification",
      description:
        "You agree to indemnify and hold harmless Type AI and its affiliates, officers, and employees from any claim or demand made by any third party due to or arising out of your breach of these Terms or your violation of any law or the rights of a third party.       ",
    },
    {
      title: "Disclaimers",
      description:
        'We provide the Services on an "as is" and "as available" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    },
    {
      title: "Limitation of Liability",
      description:
        "We will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the Services.",
    },
    {
      title: "Governing Law",
      description:
        "These Terms will be governed by and construed in accordance with the laws of the State of Wyoming, without giving effect to any principles of conflicts of law.",
    },
    {
      title: "Arbitration Agreement and Class Action Waiver",
      description:
        "You agree to arbitrate all disputes and claims that arise from these Terms or the Services in an individual capacity and not as a plaintiff or class member in any purported class or representative action.",
    },
    {
      title: "Entire Agreement",
      description:
        "These Terms constitute the entire agreement between you and Type AI and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between you and Type AI.",
    },
    {
      title: "Contact Information",
      description:
        "If you have any questions about these Terms, please contact us at legal@typeai.live.",
    },
    {
      title: "Effective Date",
      description: "These Terms are effective as of 12/07/2023.",
    },
  ];

  return (
    <div className="m-auto max-w-[1900px] min-h-[100vh] pb-10 bg-white">
      <div className="bg-white md:py-6 py-2 flex justify-center items-center font-mono text-gray-900">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="TYPE-AI"
            className="h-[10vh] md:h-[4rem] md:w-[4rem] pr-3"
          />
          <div className="cursor-pointer DM text-[20px] md:text-[28px] transition-all duration-100 font-medium tracking-widest ">
            TypeAI
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center text-gray-950">
        <div className="lg:w-[60rem] sm:w-[80vw] w-[90vw] ">
          <div className="text-[2.5rem] font-bold pb-[1rem]">Terms of Use</div>
          <div className="font-semibold text-justify">
            <div className="uppercase text-gray-900 ">
              These Terms of Service (the “Terms”) constitute a legally binding
              agreement between you and Type AI Technologies LLC (“Type AI” or
              “us/we/our”). These Terms govern your use of Type AI’s website,
              web app, application programming interface, software, tools,
              developer services, data, documentation, and websites
              (collectively, the “Services”). By accessing or using the
              Services, you agree to comply with and be bound by these Terms. If
              you do not agree to these Terms, please cease using the Services.
            </div>
            <div className="text-bold text-gray-800 font-bolder text-[18px] my-4">
              1. Usage Requirements
            </div>
            <ol className="space-y-4 font-normal">
              <li>
                a. Use of Services: You are granted a non-exclusive right to use
                the Services, subject to compliance with these Terms and
                applicable laws. Type AI and its affiliates own all rights,
                title, and interest in the Services.
              </li>
              <li>
                b. Feedback: We appreciate feedback. If you provide feedback, we
                may use it without restriction or compensation.
              </li>
              <li>
                c. Restrictions: You may not use the Services in a way that
                infringes rights, reverse engineer the source code, use output
                for malicious purposes, compete with Type AI, use automated
                methods to extract data, or violate usage policies.
              </li>
              <li>
                d. Third-Party Services: Transactions may involve third-party
                platforms or wallet service providers. Type AI is not
                responsible for third-party products.
              </li>
            </ol>

            <div className="text-bold text-gray-800 font-bolder text-[18px] my-4">
              2. Content
            </div>

            <ol className="space-y-4 font-normal">
              <li>
                a. Ownership: You own input to the Services. Type AI has the
                right to access and use input as necessary. You own the output,
                and Type AI assigns its interest in the output to you.
              </li>
              <li>
                b. Responsibility: You are responsible for content compliance
                with laws. Type AI is not liable for errors, misrepresentations,
                or omissions in the content.
              </li>
            </ol>

            <div className="text-bold text-gray-800 font-bolder text-[18px] my-4">
              3. Changes and Termination
            </div>
            <ol className="space-y-4 font-normal">
              <li>
                We may modify or discontinue the Services at any time. We are
                not liable for any modification, suspension, or discontinuation
                of the Services. Your rights under these Terms will terminate if
                you fail to comply with any term or condition.
              </li>
            </ol>
            {Changes.map((value, index) => {
              return (
                <div className="mt-[1rem]" key={value.title}>
                  <div className="text-bold text-gray-800 font-bolder text-[18px] my-4">
                    {index + 4}. {value.title}
                  </div>
                  <div className="space-y-4 font-normal">
                    {value.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsofServices;
