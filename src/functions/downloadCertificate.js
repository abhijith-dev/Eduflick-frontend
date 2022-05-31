import jsPDF from 'jspdf'
import Logo from '../assets/images/logo.png'
import getUserInfo from './getUserInfo'

export default function DownloadPDF(name,date){
    let user = getUserInfo()
    let doc = new jsPDF('landscape','px','a4','false')
    doc.addImage(Logo,'PNG',200,10,200,200)
    doc.text('Eduflick',270,250)
    doc.text(`${user.name} completed course in ${name}`,170,280)
    doc.text(`Complition date ${date}`,230,300)
    doc.save(`Eduflick-${name}.pdf`)
}