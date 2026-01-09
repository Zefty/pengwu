import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_protected")({
	beforeLoad: async ({ context }) => {
		const authSession = context.session;

		if (!authSession) {
			throw new Error("Unauthorized", { cause: 401 });
		}

		if (authSession.expiresAt < new Date()) {
			throw new Error("Unauthorized", { cause: 401 });
		}
	},
});
