import Link from "next/link";
import { useRouter } from "next/router";

const coffeeStore = () => {
	const router = useRouter();
	console.log("router", router);
	return (
		<div>
			Coffee Store Page {router.query.id}
			<Link href="/">Back To Home</Link>
		</div>
	);
};
export default coffeeStore;
