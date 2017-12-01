import {DEFAULT_DROPDOWN_CONFIG} from '../selectize.configs';
import {Validators, AbstractControl} from '@angular/forms';

export const MULTI_SELECT_CONFIG: any = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 5
});

export const FORM_GROUP_EXAMPLE = {
	requiredDropdownExample: ['angular', Validators.compose([Validators.required])],
	firstName: ['', Validators.required],
	lastName: ['', Validators.required]
};

export const REQUIRED_DROPDOWN_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value'],
	maxItems: 2
}