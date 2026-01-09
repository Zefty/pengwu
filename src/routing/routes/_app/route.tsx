import { createFileRoute, Outlet } from "@tanstack/react-router";
import { getAuthSession } from "@/core/lib/getAuthSession";

export const Route = createFileRoute("/_app")({
	beforeLoad: async ({ context }) => {
		return await getAuthSession(context.queryClient);
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
