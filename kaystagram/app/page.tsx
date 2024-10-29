import {
  Button,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";

const tabs = [
  {
    key: "cartoon",
    display: "Cartoon",
  },
  {
    key: "realistic",
    display: "Realistic",
  },
  {
    key: "more",
    display: "More",
  },
];

export default function Home() {
  return (
    <div className="h-full opacity-80 from bg-[url('/background.jpeg')] bg-top bg-cover flex flex-col">
      <Head>
        <title>Kaystagram</title>
        <meta name="description" content="This is the test description" />
      </Head>

      <div className=" py-2 flex justify-between h-[30px] px-5  text-black ">
        <div className="text-transparent">Ham</div>
        <div className="text-center">Kaystagram</div>
        <div>
          <a className="rounded-3xl bg-black text-white px-3 py-1" href="./">
            Touch
          </a>
        </div>
      </div>
      <div className="py-3 justify-center text-center">
        This is the tribute to the young talent.
      </div>

      <div className="justify-center h-full">
        <TabGroup className=" h-full">
          <TabList className="space-x-6 p-2  flex justify-center">
            <Tab className="data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:bg-slate-950 data-hover: text-white">
              Cartoon
            </Tab>
            <Tab className="data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:underline">
              Realistic
            </Tab>
            <Tab className="data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:underline">
              More
            </Tab>
          </TabList>
          <TabPanels className="h-full flex flex-grow  justify-center  bg-slate-500 bg-opacity-45 ">
            <TabPanel>cartoony photos are here</TabPanel>
            <TabPanel>This is for realistic or landscape</TabPanel>
            <TabPanel>Some features i dont know yet</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
      <footer className=" flex h-[50px] justify-center items-center">
        <p>This is copyrighted by Kyaw</p>
      </footer>
    </div>
  );
}
