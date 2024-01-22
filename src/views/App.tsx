import { Graph } from "../components/Graph/Graph.tsx";
import { Buttons } from "../components/Buttons/Buttons.tsx";
import { Wrapper } from "./App.styles.ts";
import { Sidebar } from "../components/Sidebar/Sidebar.tsx";

export const App = () => {
	return (
		<>
			<Wrapper>
				<Graph />
				<Buttons />
			</Wrapper>
			<Sidebar />
		</>
	);
};
