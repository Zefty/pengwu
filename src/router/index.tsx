import { QueryClient } from "@tanstack/react-query";
import { createRouter, Link } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { Button } from "@/client/components/ui/button";
import { routeTree } from "@/router/routeTree.gen";
import type { BetterAuthSession } from "@/server/auth";

export interface RouterContext {
	queryClient: QueryClient;
	session?: BetterAuthSession["session"];
	user?: BetterAuthSession["user"];
}

// Create a new router instance
export const getRouter = async () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// With SSR, we usually want to set some default staleTime
				// above 0 to avoid refetching immediately on the client
				staleTime: 60 * 1000,
			},
		},
	});

	const router = createRouter({
		routeTree,
		context: { queryClient },
		defaultPreload: "intent",
		scrollRestoration: true,
		defaultHashScrollIntoView: { behavior: "smooth" },
		defaultErrorComponent: (props) => {
			return (
				<main className="flex flex-col items-center pt-[calc(100%/6)]">
					<h1 className="text-3xl font-bold bg-red-500/25 rounded-md p-2 mb-12">{`${props.error.cause} ${props.error.message}`}</h1>
					<div className="flex gap-6">
						<Button type="button" onClick={() => props.reset()}>
							Reload
						</Button>
						<Button render={<Link to="/">Go Home</Link>}></Button>
					</div>
				</main>
			);
		},
		defaultNotFoundComponent: () => <div>404 - Not Found</div>,
	});

	setupRouterSsrQueryIntegration({
		router,
		queryClient,
	});

	return router;
};
