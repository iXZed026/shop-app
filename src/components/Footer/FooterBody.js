import React, { useState, useRef } from 'react';
import "./FooterBody.css";
import { IoIosArrowBack } from "react-icons/io";

const FooterBody = () => {

    let [counter, setCounter] = useState(0);
    const paragraphRef = useRef();

    const moreInformationHandler = (e) => {

        if (counter % 2 === 0) {
            paragraphRef.current.className = "paragraph-animation";
            e.target.children[0].style.transform = "rotate(90deg)";
        } else {
            paragraphRef.current.className = "paragraph";
            e.target.children[0].style.transform = "rotate(-90deg)";
        }
        console.log(paragraphRef.current)

        setCounter(counter += 1)
    }

    return (
        <div className="footer-body">
            <div className="footer-information">
                <div id="info">
                    <h2>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h2>
                    <p className='paragraph' ref={paragraphRef}> داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                        یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست

                        کدام محصولات در دیجی‌کالا قابل سفارش هستند؟

                        تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان ارسال امروز برای آن ها وجود دارد.</p>
                    <span onClick={moreInformationHandler}>مشاهده بیشتر <IoIosArrowBack /> </span>
                </div>
                <div className="license">
                    <img src="../../images/license1.webp" alt="license not found" />
                    <img src="../../images/license2.webp" alt="license not found" />
                    <img src="../../images/license3.png" alt="license not found" />
                </div>
            </div>
            <h4>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</h4>
        </div>
    )
}

export default FooterBody