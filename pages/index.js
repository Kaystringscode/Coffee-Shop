import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const handleOnBannerBtnClick = () => {
		console.log("Hi You Clicked Button");
	};
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Banner
					buttonText="Veiw Stores nearby"
					handleOnClick={handleOnBannerBtnClick}
				/>
			</main>
			{/* <footer className={styles.footer}></footer> */}
		</>
	);
}
