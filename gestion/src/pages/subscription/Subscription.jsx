import '../.././app.css'
import Header from "../.././header/Header.jsx";
import Footer from "../.././footer/Footer.jsx";
import LeftBar from "../.././leftBar/LeftBar.jsx";
import RightBar from "../.././rightBar/RightBar.jsx";

export function Subscription() {
    return (
        <>
            <Header></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Бухгалтерское обслуживание</h1>
                    <span>
                    Профессиональное бухгалтерское обслуживание является гарантией безопасности и успешности развития бизнеса. Далеко не многие компании или индивидуальные предприниматели могут себе позволить содержание в штате бухгалтерского сотрудника, имеющего значительный опыт в составлении бухгалтерской документации и прохождении различного рода проверок. Но без качественного бухгалтерского сопровождения очень легко получить серьезные финансовые убытки в виде штрафных санкций со стороны государственных органов.
                    </span>
                    <br/>
                <span>
                    Бухгалтерское обслуживание силами компании «Гестион» имеет ряд преимуществ по сравнению с наймом штатных специалистов. Перечислим лишь некоторые из них:
                </span>
                <ul>
                    <li>
                        затраты на дорогое лицензионное программное обеспечение, которое требует постоянного сопровождения и привлечения специалистов в области IT-технологий, полностью несет обслуживающая бухгалтерская компания;
                    </li>
                    <li>
                        не возникает необходимость оплачивать страховые взносы за штатного специалиста (составляющих в соответствии со ст. 12 №212-ФЗ от 24.07.09 30% от суммы заработной платы сотрудника);
                    </li>
                    <li>
                        отсутствуют проблемы замены штатного бухгалтерского сотрудника на время отпуска, в том числе, декретного, или на время больничного.
                    </li>
                </ul>
                <br/>
                <span>
                    Бухгалтерское и налоговое законодательство характерно регулярными, достаточно частыми изменениями. Указанная особенность отражается на работе бухгалтерского сотрудника – он должен непрерывно повышать квалификацию и анализировать все нововведения. Специалисты нашей компании регулярно следят за данными изменениями, посещая лекции и семинары, при этом каждый их них обладает значительным опытом в области бухгалтерского сопровождения.
                </span>
                <br/>
                <img src="/услуги/буг услуги.jpg" alt="" id="bug_service" />
                <br/>
                <button id="sama">В корзину</button>
            </div>
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
)
}

export default Subscription;