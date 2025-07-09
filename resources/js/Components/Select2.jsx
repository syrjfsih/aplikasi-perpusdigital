import React from 'react';
import Select from 'react-select';

export default function Select2({ options, onChange, placeholder, defaultOptions }) {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: '#fff',
            borderColor: state.isFocused ? '#a47148' : '#ddd',
            borderRadius: '8px',
            padding: '2px 4px',
            minHeight: '40px',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(164, 113, 72, 0.3)' : 'none',
            transition: 'border 0.2s ease',
            '&:hover': {
                borderColor: '#a47148',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused
                ? '#f3ece4'
                : state.isSelected
                ? '#e8dfd3'
                : '#fff',
            color: '#3b2f2f',
            padding: 10,
            fontSize: '0.875rem',
            cursor: 'pointer',
            '&:active': {
                backgroundColor: '#e3d2c2',
            },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#e8dfd3',
            color: '#3b2f2f',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: '#3b2f2f',
            fontWeight: 500,
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: '#a47148',
            ':hover': {
                backgroundColor: '#a47148',
                color: 'white',
            },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#aaa',
            fontSize: '0.875rem',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#a47148',
            ':hover': {
                color: '#845c3c',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
    };

    return (
        <div className="w-full">
            <Select
                options={options}
                onChange={onChange}
                defaultValue={defaultOptions || null}
                isMulti
                className="react-select-container"
                classNamePrefix="select"
                placeholder={placeholder || "Pilih data..."}
                styles={customStyles}
            />
        </div>
    );
}
