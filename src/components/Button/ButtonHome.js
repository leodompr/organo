import './ButtonHome.css'

export const ButtonHome = (props) => {
    return (
        <button className='button-home'>
            {props.children}
        </button>
    )
}