import React from 'react';

function logProps(WrappedComponent){
    class LogProps extends React.Component{
        componentDidMount(prevProps){
            console.log('old props: ', prevProps);
            console.log('new props: ', this.props);
        }

        render(){
            const {forwardedRef, ...rest} = this.props
            return <WrappedComponent ref={forwardedRef} {...rest}/>
        }
    }

    /* function forwardRef (props, ref) {
        return <LogProps {...props} forwardRef={ref}/>
    }

    const name = WrappedComponent.displayName || WrappedComponent.name;

    forwardRef.displayName = `logProps(${name})`;

    return React.forwardRef(forwardRef) */


     return React.forwardRef ((props, ref) => {
        return <LogProps {...props} forwardRef={ref}/>
    })

}

export default logProps;