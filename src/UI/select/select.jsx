import React from 'react';
import Select from 'react-select';

const MySelect = ({options, placeholder, selectedOption, setSelectedOption}) => {
    const body = window.getComputedStyle(document.body)

    const mainColor = body.getPropertyValue('--main-color')
    const darkMainColor = body.getPropertyValue('--dark-main-color')
    const bgColor = body.getPropertyValue('--bg-color')
    const darkBgColor = body.getPropertyValue('--dark-bg-color')

    return (
        <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={placeholder}
            isSearchable={false}

            styles={{
                option: styles => {
                    return {
                        ...styles,
                        backgroundColor: `${bgColor}`,
                        color: 'white',
                        transition: 'all .2s',
                        ':hover': {
                            backgroundColor: `${darkBgColor}`
                        }
                    }
                },
                control: styles => {
                    return {
                        ...styles,
                        borderColor: `${mainColor}`,
                        backgroundColor: `${bgColor}`,
                        borderRadius: 0,
                        boxShadow: 'none',
                        padding: 2,
                        '&:hover': {
                            borderColor: `${darkMainColor}`,
                        }
                    }
                },
                singleValue: styles => {
                    return {
                        ...styles,
                        color: 'white',
                    }
                },
                placeholder: styles => {
                    return {
                        ...styles,
                        color: 'white',
                    }
                },
                menu: styles => {
                    return {
                        ...styles,
                        backgroundColor: `${bgColor}`,
                        borderRadius: 0,
                        border: `1px solid ${mainColor}`,
                        margin: 0,
                        padding: 0
                    }
                },
                dropdownIndicator: styles => {
                    return {
                        ...styles,
                        color: 'white',
                        ':hover': {
                            color: `${darkMainColor}`
                        }
                    }
                },
            }}
        />
    );
}

export default MySelect