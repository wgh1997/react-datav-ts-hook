import React, {
        useImperativeHandle,
        forwardRef,
} from 'react'
const ChildComponent = (props, ref) => {
        useImperativeHandle(ref, () => ({
                say: sayHello,
                name: '22222'
        }));
        const sayHello = () => {
                alert("hello,我是子组件");
        };
        return <h3>子组件</h3>;
};

export default forwardRef(ChildComponent)