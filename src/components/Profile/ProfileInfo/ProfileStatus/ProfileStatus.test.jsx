import React from "react"
import { create } from 'react-test-renderer'
import ProfileStatus from "../ProfileStatus"

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status='rwin_just_win'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('rwin_just_win')
    });
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status='rwin_just_win' />)
        const root = component.root
        let span = root.findByType('span')
        expect(span.length).not.toBeNull()
    });
    test("after creation span should be displayed with correct text", () => {
        const component = create(<ProfileStatus status='rwin_just_win' />)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('rwin_just_win')
    })
    test("should be error after creation input", () => {
        const component = create(<ProfileStatus status='rwin_just_win' />)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status='rwin_just_win' />)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('rwin_just_win')
    })
});