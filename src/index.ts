import { sleep } from "sleep";
import { sleep as sleep1 } from "./sleep/";
import { sleep as sleep2 } from "./sleep/sleep";

const sameFile = async (ms = 1000): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms));

const main = async (): Promise<void> => {
	//should all error but don't
	sleep1(15_000);
	sleep2(15_000);
	sleep(15_000);

	//errors
	sameFile(15_000);
};

await main();
