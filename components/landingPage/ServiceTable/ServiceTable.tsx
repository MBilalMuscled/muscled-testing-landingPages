import React from "react";
import { Table, Td, Th } from "./Table/index";
import { AiFillPhone, AiFillStar, AiOutlineCheck } from "react-icons/ai";
type Props = {};

export default function ServiceTable({}: Props) {
  return (
    <>
      <div className="text-center mt-24 mb-10 px-5 md:px-10 lg:px-20 mx-auto  container">
        <h2 className="md:text-4xl text-2xl font-bold leading-[130%] text-center text-black text-opacity-80">
          Muscled Pricing: Ecommerce PPC Management
        </h2>
        <p className="md:text-2xl text-lg leading-[150%] text-center text-black text-opacity-70 mt-7">
          Browse our ecommerce PPC management plans and prices now!
        </p>
      </div>

      <div className="px-5 md:px-10 lg:px-20 mx-auto  container overflow-x-auto flex flex-shrink-0 w-full">
        <Table className="md:table-fixed table-auto w-full overflow-x-auto">
          <thead>
            <tr>
              <Th
                className="text-left text-white rounded-tl-xl border-b border-black border-opacity-10"
                content="Features"
              />
              <Td
                className="text-center font-bold border-b border-black border-opacity-10"
                content="Bronze"
                type="Bronze"
              />
              <Td
                className="text-center font-bold border-b border-black border-opacity-10"
                content="Silver"
                type="Silver"
              />
              <Td
                className="text-center font-bold rounded-tr-xl border-b border-black border-opacity-10"
                content="Gold"
                type="Gold"
              />
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-black-80">
              <Th
                className="text-left text-white font-normal"
                content="Number of Posts per Month"
              />
              <Td content="10" type="Bronze" />
              <Td content="20" type="Silver" />
              <Td content="30" type="Gold" />
            </tr>
            <tr className="text-center text-black-80">
              <Th
                className="text-white text-left font-normal"
                content="Custom Images per Month"
              />

              <Td content="8" type="Bronze" />
              <Td content="10" type="Silver" />
              <Td content="12" type="Gold" />
            </tr>
            <tr className="text-center text-black-80">
              <Th
                className="text-white text-left font-normal"
                content="Social Media Assets Included"
              />
              <Td type="Bronze" content="1" />
              <Td type="Silver" content="1.5" />
              <Td type="Gold" content="2" />
            </tr>
            <tr className="text-center">
              <Th
                className="text-white text-left"
                content="Vertical Content Creation"
              />
              <Td
                className="lg:text-base text-sm"
                type="Bronze"
                content="Add $1,200/month"
              />
              <Td
                className="lg:text-base text-sm"
                type="Silver"
                content="Add $1,200/month"
              />
              <Td
                className="lg:text-base text-sm"
                type="Gold"
                content="Add $1,200/month"
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Social Media Marketing Strategy"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Social Media Competitive Analysis"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Social Media Brand Reputation Analysis"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Social Media Audit + Recommendations"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Dedicated Social Media Account Manager"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Daily Monitoring of Included Social Assets"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="48 Business Hour or Less Customer Response Time"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Personal Social Media Consultations per Month"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Access to Muscled editorial calendar & content publishing tools"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Standard Monthly Reporting and Analysis"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Network Setup & Optimization"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="Cover Photo & Profile Photo Design/Optimization
                "
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr>
              <Th
                className="text-white text-left font-normal"
                content="450+ SMEs behind campaign driving results"
              />
              <Td
                type="Bronze"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Silver"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
              <Td
                type="Gold"
                content={<AiOutlineCheck className="mx-auto fill-green-500" />}
              />
            </tr>
            <tr className="text-center">
              <Th
                className="text-white text-left font-normal"
                content="Boosted Posts per Month"
              />
              <Td type="Bronze" content="2" />
              <Td type="Silver" content="4" />
              <Td type="Gold" content="6" />
            </tr>
            <tr className="text-center">
              <Th
                className="text-white text-left font-normal"
                content="Required Boosted Post Spend"
              />
              <Td type="Bronze" content="$100" />
              <Td type="Silver" content="$200" />
              <Td type="Gold" content="$300" />
            </tr>
            <tr className="text-center">
              <Th
                className="text-white text-left font-normal"
                content="Setup Fee"
              />
              <Td type="Bronze" content="$4,500.00" />
              <Td type="Silver" content="$6,300.00" />
              <Td type="Gold" content="$7,200.00" />
            </tr>
            <tr className="text-center">
              <Th
                className="text-white text-left font-normal"
                content="Ongoing Management Fee"
              />
              <Td type="Bronze" content="$3,000.00" />
              <Td type="Silver" content="$4,200.00" />
              <Td type="Gold" content="$4,800.00" />
            </tr>

            <tr className="text-center">
              <Th
                className="text-white text-left font-normal rounded-bl-xl"
                content={
                  <>
                    <p>Give Us a Call if You Need Information</p>
                    <div className="flex gap-2 items-center mt-2 cursor-pointer">
                      <AiFillPhone className="fill-sky-500" />
                      <p className="text-sky-500 font-bold lg:text-[24px]">
                        888-601-5359
                      </p>
                    </div>
                  </>
                }
              />
              <Td
                className="md:px-0 px-12"
                type="Bronze"
                content={
                  <button className="lg:text-xl text-sm font-semibold hover:bg-opacity-70 leading-[150%] lg:h-[60px] border border-black lg:px-10 px-5 bg-black ml-[10px] rounded text-white">
                    Get Started
                  </button>
                }
              />
              <Td
                className="md:px-0 px-12"
                type="Silver"
                content={
                  <button className="lg:text-xl text-sm font-semibold hover:bg-opacity-70 leading-[150%] lg:h-[60px] border border-black lg:px-10 px-5 bg-black ml-[10px] rounded text-white">
                    Get Started
                  </button>
                }
              />
              <Td
                className="rounded-br-xl md:px-0 px-12"
                type="Gold"
                content={
                  <button className="lg:text-xl text-sm font-semibold hover:bg-opacity-70 leading-[150%] lg:h-[60px] border border-black lg:px-10 px-5 bg-black ml-[10px] rounded text-white">
                    Get Started
                  </button>
                }
              />
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}