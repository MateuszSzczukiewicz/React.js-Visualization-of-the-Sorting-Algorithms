import { Graph } from "../components/Graph/Graph.tsx";
import { Sidebar } from "../components/Sidebar/Sidebar.tsx";
import { Wrapper } from "./App.styles.ts";
import { Legend } from "../components/Legend/Legend.tsx";

export const App = () => {
	return (
		<>
			<Wrapper>
				<Graph />
			</Wrapper>
			<Sidebar />
			<Legend />
		</>
	);
};
