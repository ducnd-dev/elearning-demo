export const Footer = () => (
  <div className="w-full bg-white px-1 py-5">
    <div className="item-center container mx-auto flex justify-between gap-5">
      <div>
        <img src="http://mona.media/wp-content/uploads/2023/03/media-logo.png" alt="Mona Media" />
      </div>
      <div>
        <div>Liên hệ</div>
        <div className="flex items-start">
          <img src="https://mona.media/template/assets/images/footer-icon-mail.svg" alt="Email" width={20} height={20} />
          <div>
            Email
            <br />
            <a href="mailto:info@khanhhung.academy" className="font-semibold text-[#7c0fd1]">
              info@khanhhung.academy
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <img src="https://mona.media/template/assets/images/footer-icon-marker.svg" alt="Email" width={20} height={20} />
          <div>
            Địa chỉ
            <br />
            <a href="mailto:info@khanhhung.academy" className="font-semibold text-[#7c0fd1]">
              1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-start">
          <img src="https://mona.media/template/assets/images/footer-icon-marker.svg" alt="Email" width={20} height={20} />
          <div>
            Mã số thuế
            <br />
            <img src="https://khanhhung.academy/template/assets/images/logo/media-less-logo.svg" alt="Mona Media" />
          </div>
        </div>
        <div>
          Công ty TNHH MONA MEDIA
          <br />
          <span className="font-semibold text-[#f41e92]">0313728397</span>
        </div>
      </div>
      <div>
        <div className="flex items-start">
          <img src="https://mona.media/template/assets/images/footer-icon-marker.svg" alt="Email" width={20} height={20} />
          <div>
            Số tài khoản

            <br />
            Ngân hàng
            <img src="https://khanhhung.academy/template/assets/images/logo/media-less-logo.svg" alt="Mona Media" />
          </div>
        </div>
        <span className="">216341549</span>
      </div>
    </div>
  </div>
);

export default Footer;
