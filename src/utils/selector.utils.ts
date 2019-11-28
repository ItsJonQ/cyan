import { getByText as baseGetByText } from '@testing-library/dom';
import {
	isArray,
	isElement,
	isNodeCollection,
	isNode,
	isString,
} from './is.utils';

export type CyNodeCollection = Array<any>;

export const get = (selector: any): CyNodeCollection => {
	if (isNodeCollection(selector)) {
		return Array.from(selector);
	}

	if (isNode(selector) || isElement(selector)) {
		return [selector];
	}

	if (isString(selector)) {
		return Array.from(document.querySelectorAll(selector));
	}

	if (isArray(selector)) {
		return selector;
	}

	return [];
};

export const getByCy = (selector: string): CyNodeCollection =>
	get(`[data-cy="${selector}"]`);

export const getByText = (text: string, node = document.body): any => {
	return baseGetByText(node, text);
};
