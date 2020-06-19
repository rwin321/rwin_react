import React from "react";

export const required  = value => {
    if (value)
    return undefined;
    return 'Field is required';
}
export const maxLength  = max => value => value && value.length > max ? `Field must be less then ${max} symbols` : undefined;
