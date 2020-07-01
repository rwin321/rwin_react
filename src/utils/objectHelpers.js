import React from 'react'

export const objMappingArr = (items, itemId, objPropName, newObjProp) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProp}
        }
        return u;
    })
}