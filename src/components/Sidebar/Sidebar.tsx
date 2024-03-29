import { SettingsIcon } from "../../assets/SettingsIcon.tsx";
import { StyledNav, StyledToggleButton } from "./Sidebar.styles.ts";
import { AlgorithmSelection } from "../AlgorithmSelection/AlgorithmSelection.tsx";
import { GraphSizeSelection } from "../GraphSizeSelection/GraphSizeSelection.tsx";
import { useSidebar } from "../../hooks/useSidebar.ts";

export const Sidebar = () => {
	const { isOpen, handleToggle } = useSidebar();

	return (
		<>
			<StyledToggleButton isOpen={isOpen} onClick={handleToggle} aria-label="Settings">
				<SettingsIcon />
			</StyledToggleButton>
			<StyledNav isOpen={isOpen}>
				<AlgorithmSelection />
				<GraphSizeSelection />
			</StyledNav>
		</>
	);
};
