interface ErrorProps {
    text: string
}


const ErrorAlert: React.FC<ErrorProps> = ({text}) => {
    return (
        <p style={{color: "red"}}>
            {text}
        </p>
    )
}


export default ErrorAlert
