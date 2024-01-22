import { useState } from "react";

export const useSidebar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggle = () => {
		setIsOpen((prevState) => !prevState);
	};

	return {
		isOpen,
		handleToggle,
	};
};
