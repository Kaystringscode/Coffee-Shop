import { useRouter } from "next/router";

const coffeeStore = () => {
	const router = useRouter();
	console.log("router", router);
	return <div>Coffee Store Page</div>;
};
export default coffeeStore;
