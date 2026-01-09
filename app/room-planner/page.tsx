// room-planner/page.tsx
import RootLayout from "@/app/layout";
import Head from "next/head";

const RoomPlanner = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: Add other sizes/types */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </Head>
      <RootLayout noSidebar={true}>
        <div
          className="w-full h-screen overflow-hidden"
          style={{
            touchAction: "manipulation",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <iframe
            src="https://roomplanner-abic.vercel.app/roomplanner/dmci"
            width="100%"
            height="100%"
            title="Room Planner"
            style={{
              border: "none",
              touchAction: "auto",
              pointerEvents: "auto",
            }}
          />
        </div>
      </RootLayout>
    </>
  );
};

export default RoomPlanner;
