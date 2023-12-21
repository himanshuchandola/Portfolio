import React from 'react';

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="font-general-regular mb-4">
			<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-1"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-5 py-2 bg-white dark:bg-[#0a0a0a] dark:text-white border border-black/10 dark:border-white/10 rounded-md shadow-sm text-md"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;