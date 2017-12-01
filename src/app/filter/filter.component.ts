import { Component, OnInit } from '@angular/core';

import {MULTI_SELECT_CONFIG,REQUIRED_DROPDOWN_CONFIG,FORM_GROUP_EXAMPLE} from './multiSelectExample.config';
import {ExampleSelectizeOption} from '../app.types';
import {ExampleValues_Frameworks} from '../selectize.configs';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	requiredDropdownConfig: any = REQUIRED_DROPDOWN_CONFIG;
	requiredDropdownOptions: any = ExampleValues_Frameworks.slice(0);
	formGroupExample: FormGroup;


  options: ExampleSelectizeOption[] = ExampleValues_Frameworks.slice(0);
	config: any = MULTI_SELECT_CONFIG;
	placeholder = 'Placeholder...';
	value: string[] = [];

	constructor(private formBuilder: FormBuilder) {
	}

	ngOnInit(): void {
		this.formGroupExample = this.formBuilder.group(FORM_GROUP_EXAMPLE);
		console.log(this.formGroupExample.controls['requiredDropdownExample'])
	}

	hasStartsWithRError(): boolean {
		console.log(this.formGroupExample.controls['requiredDropdownExample'].hasError('doesntStartWithR'));
		return true;
	}

	testSetValue(): void {
		this.formGroupExample.controls['requiredDropdownExample'].setValue(['angular', 'reactjs'])
	}

	resetForm() {
		this.formGroupExample.get('requiredDropdownExample').reset('');
		this.formGroupExample.get('firstName').reset('');
		this.formGroupExample.get('lastName').reset('');
	}

	

	addRandomOption() {
		const randomValue = Math.random().toString();
		this.options.push(<ExampleSelectizeOption>{
			label: randomValue,
			value: randomValue,
			code: randomValue
		});
	}

	onValueChange($event: any) {
		console.log('Multi select option changed: ', $event);
	}

}
