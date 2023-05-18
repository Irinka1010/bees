import React from 'react';
import { useState } from 'react';
import { ListItem, List, LinkMenu } from './MenuBee.styled';

const MenuBee = () => {
	const [isOpen, setOpen] = useState(false);
	const toggleTable = () => setOpen(isOpen => !isOpen);
	return (
		<List onClick={toggleTable}>
			Пчелы
			{isOpen ? (
				<>
					<ListItem>
						<li>
							<ul>
								Индийская пчела
								<li className="item">
									<LinkMenu> Красная</LinkMenu>
								</li>
								<li className="item">
									<LinkMenu>Розовая</LinkMenu>
								</li>
								<li className="item">
									<LinkMenu>Черная</LinkMenu>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								Арликовая пчела
								<li className="item">
									<LinkMenu> Красная</LinkMenu>
								</li>
								<li className="item">
									<LinkMenu>Розовая</LinkMenu>
								</li>
								<li className="item">
									<LinkMenu>Черная</LinkMenu>
								</li>
							</ul>
						</li>
					</ListItem>
				</>
			) : (
				''
			)}
		</List>
	);
};
export default MenuBee;
