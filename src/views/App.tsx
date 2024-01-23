import { Graph } from "../components/Graph/Graph.tsx";
import { Sidebar } from "../components/Sidebar/Sidebar.tsx";
import { Wrapper } from "./App.styles.ts";

export const App = () => {
	return (
		<>
			<Wrapper>
				<Graph />
			</Wrapper>
			<Sidebar />
		</>
	);
};
