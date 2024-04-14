import MyAlert from './alert/MyAlert'
import mainStyle from '../mainStyle.module.css'


export default function Welcome() {
    
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className={mainStyle.titlePage +' p-5 fw-bold'}>EpiBooks</h1>
            <MyAlert/>
        </div>
    )
}