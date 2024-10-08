/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Overlay isOpen={isOpen} onDismiss={onDismiss}>
			<Content aria-label="Menu">
				<Header>
					<CloseButton onClick={onDismiss}>
						<VisuallyHidden>Close menu</VisuallyHidden>
						<Icon
							id="close"
							strokeWidth={2}
							color="var(--color-gray-900)"
							size={24}
						/>
					</CloseButton>
				</Header>
				<Nav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</Nav>
				<Footer>
					<FooterLink href="/terms">Terms and Conditions</FooterLink>
					<FooterLink href="/privacy">Privacy Policy</FooterLink>
					<FooterLink href="/contact">Contact Us</FooterLink>
				</Footer>
			</Content>
		</Overlay>
	);
};

const Overlay = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: var(--color-backdrop);
	display: flex;
	justify-content: flex-end;
`;

const Content = styled(DialogContent)`
	position: relative;
	background: hsl(0deg 0% 100%);
	height: 100%;
	width: 300px;
	padding: 32px;
	display: flex;
	flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
	position: absolute;
	top: 10px;
	right: 0px;
	padding: 16px;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;
	flex: 3;
	justify-content: center;
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

const Header = styled.header`
	flex: 1;
`;

const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 14px;
	justify-content: flex-end;
`;

const FooterLink = styled.a`
	font-size: 0.875rem;
	text-decoration: none;
	color: var(--color-gray-700);
	font-weight: 500;
`;

export default MobileMenu;
