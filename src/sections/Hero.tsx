import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative md:flex md:flex-col pt-[42px] overflow-hidden md:pt-14 md:h-[862px] bg-[#FAF0E3]">
      <h1 className="font-primary relative z-10 text-[42px]/[42px] md:text-[58px]/[52px] tracking-[-1.25px] md:tracking-[-1.74px] text-center">
        O Nordeste tem{" "}
        <span className="justify-center md:flex md:gap-3">
          <span className="block md:inline-block w-fit mx-auto md:mx-0 relative text-[#B27944]">
            Café Especial
          </span>{" "}
          <span>de Verdade!</span>
        </span>
      </h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="44"
        viewBox="0 0 65 44"
        fill="none"
        className="absolute left-0 top-10 md:hidden"
      >
        <path
          d="M4.75934 43.9302L2.44542 43.8949L2.08342 43.2989C1.88468 42.9709 1.28137 42.2057 0.741928 41.592C-0.674103 39.9839 -5.80233 34.6483 -6.33112 34.2321L-6.78185 33.8759L-6.19273 34.8211C-4.72346 37.1733 -1.51165 41.451 -0.120464 42.9039L0.834202 43.8984H-25.1157L-27.6461 43.1226C-32.934 41.5004 -38.403 39.2963 -38.8572 38.6051C-38.9566 38.4534 -39.2512 37.7799 -39.5138 37.1063C-40.1632 35.4276 -40.1633 34.8246 -39.5067 32.9273C-38.9424 31.2945 -37.9629 29.0058 -37.537 28.3463C-37.1396 27.7256 -36.9089 27.6904 -33.2783 27.7045C-30.9041 27.7151 -30.3114 27.7503 -29.9068 27.902C-28.9734 28.2511 -28.1181 28.1065 -27.5574 27.507C-27.0641 26.9815 -27.0463 26.777 -27.1883 23.3739C-27.3444 19.5687 -27.2131 16.1374 -26.8547 14.6809C-26.6453 13.8275 -25.2967 9.40166 -25.0554 8.77394C-24.8069 8.1321 -22.3262 5.4766 -20.534 3.93902C-19.1073 2.71531 -17.8617 1.89364 -16.3108 1.15659C-14.728 0.405432 -13.7626 0.179727 -11.5623 0.0492445C-7.70103 -0.179981 -3.11579 0.405428 -0.155968 1.50571C1.02583 1.94653 3.89338 4.77483 4.91903 6.51342C5.13551 6.88371 5.39814 7.25399 5.50105 7.33862C5.64538 7.45853 5.92574 7.14936 6.34215 6.41114C6.88159 5.45192 8.56026 3.77681 9.50428 3.26546C10.9806 2.45788 11.552 2.34149 13.9618 2.35207C16.2508 2.36265 17.6952 2.52489 20.002 3.03272C24.0549 3.92846 29.5807 6.39705 33.7542 9.1795C35.5145 10.3503 36.5402 11.3906 37.3564 12.8295C37.5126 13.1081 38.084 14.0144 38.6269 14.8502C39.8194 16.691 40.3872 17.6256 40.5789 18.0805L40.7244 18.4226L41.3383 17.9183C42.4137 17.0296 43.9149 16.423 45.0363 16.423C45.3061 16.423 45.8136 16.3031 46.1685 16.155C49.3909 14.8114 51.8752 16.1056 53.9123 20.1964C54.6185 21.6141 55.4454 23.7724 56.1623 26.0681C56.4391 26.9639 56.7976 28.0995 56.9502 28.5932C57.1028 29.0869 57.4683 30.0214 57.7558 30.6668L58.2775 31.8446H59.5444C60.7724 31.8446 60.8363 31.8552 61.6951 32.2643C63.3844 33.0648 64.6549 34.7435 64.9353 36.542C65.0666 37.3919 65.0027 38.0514 64.701 38.9224C64.1261 40.587 62.451 42.1069 60.2471 42.9674C59.5515 43.239 59.2996 43.2742 58.1603 43.2813C56.9608 43.2883 56.8082 43.2636 56.1516 42.9604L55.4419 42.6359L54.5191 42.918L53.5964 43.2002L52.7943 42.121C51.2718 40.0721 49.2418 38.5839 49.2418 39.522C49.2418 39.8323 50.2533 41.1759 51.3676 42.3432C51.9319 42.9357 52.3649 43.4541 52.3259 43.4929C52.1804 43.6375 50.0332 43.5563 47.8897 43.3271C46.4062 43.1684 44.7098 43.0803 42.6976 43.052L39.7058 43.0133L39.1628 42.3079C38.4956 41.4369 37.1648 40.0897 36.7105 39.8217C36.4088 39.6454 36.3662 39.6419 36.3059 39.8005C36.1994 40.0756 36.8773 41.0807 37.9136 42.1951L38.8541 43.2037L37.0228 43.2777C34.8757 43.3659 33.7365 43.4929 32.4447 43.7961C31.5397 44.0077 31.0464 44.0148 19.2923 43.9901C12.5776 43.976 6.04049 43.9478 4.76642 43.9302H4.75934ZM-19.4729 42.3079C-19.9981 41.3135 -21.4212 39.4056 -21.9252 39.0247C-22.2872 38.7497 -22.6705 38.6544 -22.6705 38.8343C-22.6705 39.0036 -21.8897 40.2132 -21.2935 40.9678C-20.4879 41.9835 -19.1286 43.3835 -19.079 43.2425C-19.0577 43.179 -19.2351 42.7593 -19.4693 42.3115L-19.4729 42.3079ZM-6.47664 41.1336C-7.86783 38.7426 -10.3627 35.5793 -10.5828 35.9249C-10.7105 36.1294 -10.6183 36.4503 -10.235 37.0957C-9.34418 38.598 -6.44114 41.9482 -6.22111 41.7296C-6.18917 41.6978 -6.3063 41.4334 -6.48019 41.1371L-6.47664 41.1336ZM26.7699 40.8903C26.7699 40.5835 24.0904 37.0393 22.8199 35.6674C22.1385 34.9304 21.0525 34.144 20.7189 34.144C20.5096 34.144 20.4492 34.2039 20.4492 34.4085C20.4492 34.7153 21.1413 35.8191 21.7659 36.5103C22.6638 37.5013 26.525 40.989 26.7238 40.989C26.7486 40.989 26.7699 40.9467 26.7699 40.8938V40.8903ZM14.7532 38.9083C14.1605 37.8539 12.1482 34.9022 10.8564 33.1883C9.74205 31.7106 8.18761 30.0179 7.7227 29.7781C6.7077 29.2526 8.79092 32.2079 12.858 37.0604C14.086 38.524 15.1081 39.7053 15.1293 39.6842C15.1506 39.6666 14.9838 39.3139 14.7532 38.9083ZM60.7546 39.0917C60.4139 38.2313 60.0235 37.5013 59.3883 36.5314C58.7104 35.4946 58.1852 34.9304 57.9084 34.9304C57.4754 34.9304 57.7238 35.5722 58.753 37.1274C59.4415 38.1678 60.8363 39.8182 60.9392 39.7159C60.964 39.6912 60.8824 39.4091 60.7582 39.0917H60.7546ZM9.20616 39.5008C9.16002 39.4232 8.69156 38.7285 8.16632 37.9597C6.24989 35.1631 3.9963 32.4089 3.78691 32.6099C3.50299 32.885 6.39539 36.7571 8.47152 38.8872C9.2097 39.6454 9.35876 39.7688 9.20616 39.5043V39.5008ZM-25.9 36.9864C-26.1804 36.0977 -27.8768 32.6981 -28.512 31.7459C-29.1367 30.8078 -30.3078 29.5418 -30.5421 29.5418C-31.2164 29.5418 -29.0054 33.5127 -26.4643 36.8665C-26.0988 37.3461 -25.7758 37.7164 -25.7474 37.6846C-25.7155 37.6529 -25.7829 37.339 -25.8965 36.9828L-25.9 36.9864ZM-32.8879 35.9672C-34.8434 33.0401 -37.2425 30.3776 -37.8422 30.4658C-38.2184 30.5187 -38.1794 30.8043 -37.6967 31.5167C-36.8627 32.7474 -32.4798 37.198 -32.2881 37.0075C-32.2562 36.9758 -32.5259 36.5103 -32.8879 35.9672ZM-15.278 36.0095C-15.6187 34.7082 -16.7012 32.3701 -17.5139 31.1711C-18.0781 30.3388 -19.118 29.2421 -19.5474 29.0199C-21.006 28.2723 -19.8704 30.7549 -16.8786 34.874C-15.8423 36.2987 -15.3277 36.8735 -15.2 36.7466C-15.1503 36.6972 -15.1858 36.3657 -15.278 36.0095ZM35.2803 34.6765C34.1624 32.5182 29.0519 26.3362 28.6863 26.6994C28.3669 27.0168 29.3074 28.7166 30.8405 30.6033C31.994 32.021 35.1099 35.0432 35.4187 35.0432C35.4471 35.0432 35.3832 34.8775 35.2803 34.68V34.6765ZM43.7587 33.7419C43.2157 32.6346 41.5619 30.293 40.7315 29.4466C39.72 28.4168 38.6695 27.6234 38.4388 27.7151C38.091 27.8455 38.4992 28.6813 39.681 30.2683C40.8663 31.8588 43.9078 34.8175 44.0178 34.4861C44.0426 34.4155 43.9255 34.0805 43.7587 33.7419ZM49.65 30.7267C48.6953 28.907 47.0273 26.5725 46.4559 26.2551C45.8207 25.9024 46.2926 27.1931 47.3928 28.8048C48.0991 29.8416 50.1042 32.0809 50.2213 31.9646C50.2497 31.9363 49.9942 31.3791 49.65 30.7267ZM-0.855099 29.1292C-2.14337 26.7629 -4.43599 22.9648 -5.91235 20.7395C-8.12334 17.414 -9.6565 15.9328 -9.78071 17.0014C-9.82685 17.4069 -9.25546 18.7364 -8.4463 20.0977C-7.15804 22.263 -0.241131 31.0723 -0.0104485 30.8431C0.021492 30.8114 -0.358246 30.0391 -0.855099 29.1257V29.1292ZM56.0061 29.5877C54.3452 26.5795 50.9844 21.3708 49.4157 19.3748C48.351 18.0206 48.1026 17.816 48.1026 18.2921C48.1026 18.8422 49.2454 20.8841 51.0447 23.5537C52.5672 25.8107 56.3007 30.635 56.4285 30.5081C56.4568 30.4799 56.2687 30.0637 56.0061 29.5877ZM15.974 29.0798C14.4302 25.2394 9.88401 17.3717 9.06066 17.1107C8.73415 17.0084 9.06065 17.8442 10.3347 20.401C11.8714 23.4762 16.2295 30.6139 16.3537 30.2577C16.3786 30.1872 16.2082 29.6582 15.974 29.0798ZM-13.3013 29.6441C-13.3013 28.773 -14.3092 26.4349 -17.088 20.8489C-18.9689 17.0719 -20.0691 15.0759 -21.2509 13.2774C-22.1772 11.8738 -22.493 11.4964 -22.635 11.6375C-22.8941 11.8949 -21.6697 14.6598 -18.4046 21.1839C-15.6365 26.71 -14.4724 28.8682 -13.8868 29.5453C-13.4255 30.0779 -13.2977 30.099 -13.2977 29.6405L-13.3013 29.6441ZM3.40364 25.7049C2.49156 23.9875 -0.124027 19.9919 -1.77784 17.7843C-2.78929 16.4371 -4.53537 14.5116 -4.74475 14.5116C-5.20612 14.5116 -2.62603 18.4155 0.489944 22.4358C2.55543 25.0984 3.68045 26.4913 3.73369 26.4455C3.75853 26.4243 3.60948 26.0893 3.40719 25.7014L3.40364 25.7049ZM22.8128 25.2676C21.1377 21.9491 18.6073 17.8865 17.4646 16.684C16.8967 16.0845 16.8435 16.0563 16.8399 16.3137C16.8328 16.8709 18.2382 19.4135 20.0198 22.062C21.088 23.6525 23.2742 26.5548 23.3452 26.4843C23.3736 26.4561 23.1322 25.9095 22.8093 25.2712L22.8128 25.2676ZM-22.2411 24.9538C-22.2162 24.6258 -22.3085 24.1673 -22.5037 23.6066C-22.8657 22.5769 -25.2186 17.7666 -25.3606 17.7666C-25.4813 17.7666 -26.0562 19.008 -26.0562 19.2725C-26.0562 19.6428 -24.1327 23.6771 -23.54 24.5517C-22.8018 25.6379 -22.3014 25.7931 -22.2411 24.9538ZM7.5204 23.0248C6.25698 20.0131 3.54913 15.358 3.05938 15.358C2.51994 15.358 3.86144 18.151 5.85595 21.1839C6.71479 22.4887 7.71561 23.8429 7.77594 23.7794C7.80079 23.7547 7.68366 23.4162 7.5204 23.0248ZM31.7881 20.997C31.1351 19.3571 29.0164 15.1217 28.2959 14.0109C26.9544 11.9478 26.0921 10.9251 25.691 10.9251C25.3858 10.9251 26.0637 12.8436 27.1142 14.9525C28.0511 16.8356 30.7199 20.8559 31.8378 22.0655C32.285 22.5487 32.2672 22.2031 31.7881 20.997ZM24.8535 18.7294C24.7896 18.5636 24.7364 18.3168 24.7364 18.1828C24.7364 17.675 20.7509 10.2339 19.6791 8.73868C18.5292 7.1341 17.5639 6.27715 17.2232 6.55927C16.5312 7.13057 18.2205 10.2128 22.2344 15.693C23.4516 17.354 24.8712 19.135 24.9315 19.075C24.9528 19.0538 24.9209 18.8987 24.857 18.7294H24.8535ZM14.2528 16.7863C13.3194 14.956 10.1431 10.5478 8.96128 9.44046C7.82207 8.37191 7.70851 8.61877 8.68447 10.0364C10.0899 12.0783 14.3273 17.4316 14.5367 17.4316C14.5615 17.4316 14.4338 17.1425 14.2528 16.7863ZM-14.9373 15.3298C-14.9799 15.1006 -15.2141 14.2895 -15.459 13.5313C-15.7004 12.773 -15.8991 12.0219 -15.8991 11.8703C-15.8991 11.7186 -16.1049 10.9604 -16.3569 10.1916C-17.34 7.19052 -18.7099 5.24032 -19.3771 5.89979C-19.6184 6.13959 -19.5226 6.67563 -18.9902 7.99809C-18.0569 10.3221 -15.1929 15.7495 -14.9018 15.7495C-14.877 15.7495 -14.8947 15.5626 -14.9373 15.3298ZM-6.9309 13.4219C-7.49873 12.1453 -10.2882 7.24694 -11.6688 5.09927C-12.556 3.72039 -13.6775 2.40145 -13.9685 2.40145C-14.3553 2.40145 -13.6349 4.09419 -12.3324 6.23128C-10.8312 8.69634 -6.95575 14.0673 -6.67538 14.0673C-6.65764 14.0673 -6.77121 13.7781 -6.92736 13.4219H-6.9309ZM0.255722 11.2108C-1.94107 7.09178 -5.11385 2.46493 -6.10045 1.93947C-6.85638 1.53745 -6.34887 2.83521 -4.8938 5.02168C-3.31452 7.39505 0.752567 12.7025 0.890976 12.565C0.922916 12.5332 0.639011 11.9232 0.255722 11.2108Z"
          fill="#B27944"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="73"
        height="71"
        viewBox="0 0 73 71"
        fill="none"
        className="absolute right-0 top-10 md:hidden"
      >
        <path
          d="M59.3033 70.8525L56.1525 70.7711L54.0653 67.6146C50.5833 62.347 48.5933 59.8264 48.2147 60.213C47.6916 60.7472 49.8361 64.1707 53.8835 69.2552L55.0915 70.7736L37.6018 70.8118L20.112 70.8499L17.1705 69.9343C11.9201 68.3014 6.7867 66.3302 3.7854 64.7939C2.16395 63.9647 2.11165 63.9215 1.72309 63.1075C1.17265 61.9604 0.485213 59.7985 0.183837 58.2596C-0.110067 56.7742 -0.0453086 54.9226 0.333279 53.8492C0.701904 52.8064 2.07179 50.3595 2.28599 50.3595C2.3906 50.3595 2.78663 50.0848 3.16522 49.7491C4.32589 48.7215 5.43923 48.0221 8.06942 46.6613C10.7893 45.2522 12.0695 44.8274 13.2675 44.9266L14.0272 44.9902L13.9649 40.6561C13.8902 35.4979 13.9948 34.4449 14.8915 31.3444C16.5951 25.4511 18.366 20.7049 20.6176 15.9867C23.2777 10.4114 25.2279 8.01288 29.7834 4.7216C31.6016 3.40661 34.5133 1.61344 36.3689 0.662173C37.7387 -0.0398314 37.7985 -0.0550905 38.7475 0.0441058C40.7151 0.250129 44.0726 1.66177 46.3317 3.23619C48.6281 4.83605 50.8972 6.71569 51.2807 7.33885C51.4874 7.67205 52.2895 9.15236 53.0641 10.625C54.7802 13.8858 55.1463 14.4454 57.5424 17.4314C58.581 18.7261 60.1377 20.7405 61.002 21.908C61.8662 23.0755 62.6184 24.0522 62.6732 24.0725C62.7778 24.1157 64.7579 20.0284 64.7579 19.7689C64.7579 19.685 65.0643 19.1076 65.4404 18.4845C65.8165 17.8613 66.9298 15.9867 67.9162 14.3182C70.9623 9.15745 73.326 5.80512 74.7083 4.68599C76.9375 2.88265 82.3897 1.97208 89.934 2.14504C94.0611 2.23915 95.4485 2.42736 97.5431 3.17769C100.597 4.2714 102.676 5.59656 104.597 7.67459C105.573 8.73269 107.302 11.1643 107.825 12.2173C108.457 13.4916 110.345 19.9622 111.217 23.8385C111.715 26.0539 111.748 26.3744 111.932 30.9578C112.039 33.5979 112.174 35.8387 112.233 35.9379C112.313 36.0702 112.43 36.0397 112.662 35.8285C113.534 35.035 115.307 34.3177 117.7 33.7963C119.561 33.3893 123.733 33.3105 125.524 33.6488C126.5 33.8319 126.709 33.9362 127.349 34.5466C128.777 35.9099 130.216 38.5959 132.371 43.9118C133.698 47.1852 134.286 48.8309 134.665 50.329C134.964 51.5092 135.183 54.9963 135.19 58.7073C135.198 62.1054 135.394 64.6921 135.738 65.9156C135.88 66.4166 135.997 67.3145 136 67.9147C136.005 68.8864 135.957 69.072 135.554 69.6596C135.305 70.0208 134.839 70.4684 134.515 70.6566C133.94 70.9898 133.823 70.9975 129.138 71H124.348L123.95 70.3539C122.443 67.9096 120.221 65.417 118.971 64.7634C118.365 64.448 117.955 64.5116 117.955 64.9211C117.955 65.4221 119.501 67.4391 121.247 69.2145L123.001 70.9975L114.647 70.9898L106.293 70.9822L105.327 69.5858C104.258 68.0419 102.188 65.7553 101.473 65.328C101.063 65.0813 101.005 65.0787 100.923 65.2924C100.759 65.7324 101.81 67.2229 103.628 69.1178L105.421 70.9898L83.9389 70.9568C72.123 70.939 61.0368 70.8881 59.3058 70.8423V70.855L59.3033 70.8525ZM70.5538 67.0016C70.5538 66.6939 69.2437 64.1402 68.1677 62.3496C66.9747 60.3656 65.3009 58.5572 64.6558 58.5572C63.2909 58.5572 63.7542 60.1698 65.7567 62.3903C67.3333 64.1402 70.3172 67.2077 70.4417 67.2077C70.504 67.2077 70.5563 67.1161 70.5563 67.0042L70.5538 67.0016ZM88.3848 66.7727C88.3848 66.3556 84.858 61.5636 83.1867 59.7069C82.29 58.7098 80.8579 57.6441 80.4195 57.6441C80.1455 57.6441 80.0633 57.7255 80.0633 58.0002C80.0633 58.4148 80.9749 59.9104 81.7969 60.8413C82.98 62.1842 88.061 66.8999 88.3225 66.8999C88.3549 66.8999 88.3823 66.8414 88.3823 66.7702L88.3848 66.7727ZM130.958 62.6166C130.794 61.7875 129.335 58.8752 128.214 57.1507C127.536 56.1078 126.55 54.887 125.484 53.7755C123.9 52.1222 123.451 51.7813 123.451 52.229C123.451 52.6767 126.201 57.0438 128.039 59.5441C130.685 63.1406 131.158 63.6391 130.956 62.6166H130.958ZM19.051 61.4899C18.6798 60.2868 16.4507 55.6907 15.6113 54.4037C14.7869 53.137 13.2501 51.4253 12.9363 51.4253C12.0496 51.4253 14.9587 56.7971 18.3037 61.3347C18.7844 61.9859 19.2079 62.4844 19.2477 62.4437C19.2876 62.403 19.1979 61.9757 19.051 61.4924V61.4899ZM33.0313 60.1698C32.583 58.4072 31.1583 55.2456 30.0873 53.6254C29.3426 52.5012 27.9752 51.0132 27.4098 50.7156C25.4919 49.7033 26.9839 53.0658 30.9242 58.6335C32.2891 60.564 32.9665 61.3398 33.1359 61.1694C33.2007 61.1033 33.1533 60.6531 33.0313 60.1723V60.1698ZM99.5855 58.3665C98.1135 55.4465 91.3861 47.0835 90.9054 47.5744C90.487 48.0017 91.7224 50.3036 93.7398 52.8547C95.2567 54.7751 99.3589 58.8599 99.7673 58.8599C99.8022 58.8599 99.72 58.6386 99.583 58.3665H99.5855ZM110.749 57.1024C110.032 55.6068 107.857 52.435 106.764 51.293C105.434 49.9017 104.051 48.8284 103.745 48.9479C103.289 49.1259 103.825 50.2578 105.381 52.402C106.943 54.5563 110.946 58.5547 111.093 58.1096C111.125 58.0155 110.968 57.5602 110.749 57.1024ZM64.9348 54.9734C64.7978 54.1341 62.5213 49.861 60.728 47.0784C59.5001 45.1733 55.5747 39.771 55.1712 39.4352C54.9147 39.2216 54.9047 39.2368 54.9944 39.6997C55.2136 40.8316 58.3095 46.8114 60.0381 49.4464C62.8077 53.6661 65.149 56.3113 64.9323 54.9734H64.9348ZM46.7875 54.0374C46.5434 53.1091 44.0851 48.195 42.9393 46.3408C40.9667 43.1513 38.2095 39.6387 37.9131 39.9414C37.7761 40.0813 39.7537 44.0135 41.298 46.674C42.7102 49.1031 45.4699 53.3278 46.2794 54.2918C46.8896 55.0192 47.0266 54.9506 46.785 54.0349L46.7875 54.0374ZM118.502 53.0226C117.245 50.563 115.048 47.404 114.301 46.9741C113.464 46.496 114.089 48.2434 115.531 50.4231C116.458 51.8246 119.1 54.8564 119.255 54.6987C119.292 54.6606 118.953 53.9052 118.502 53.0226ZM74.1703 50.797C72.5638 46.6944 68.4442 39.0003 66.1801 35.8794C64.2747 33.2545 64.4815 34.4093 66.743 39.0562C68.773 43.2225 74.5066 52.87 74.6685 52.3892C74.7009 52.2951 74.4767 51.5779 74.1703 50.797ZM51.0018 49.8839C49.7714 46.5672 47.7738 42.4594 45.9855 39.5624C44.227 36.7188 42.1697 34.4042 42.8298 36.0142C43.2158 36.9579 46.3342 42.93 48.3018 46.4909C50.8175 51.0437 51.5921 52.3206 51.6518 52.0077C51.6792 51.8704 51.3853 50.914 51.0043 49.8839H51.0018ZM35.6341 51.5601C35.6341 50.3799 34.309 47.2209 30.6477 39.6641C28.1645 34.539 26.7223 31.8454 25.1632 29.4215C23.3923 26.6694 22.8667 26.3082 23.5218 28.2947C24.0822 29.9938 25.8904 33.9515 29.1782 40.679C32.5979 47.6762 34.1123 50.5427 34.857 51.4329C35.4622 52.1552 35.6341 52.1832 35.6341 51.5626V51.5601ZM128.159 48.1365C127.387 46.5748 125.384 43.253 124.405 41.9126C122.313 39.0384 119.992 37.4208 121.574 39.9363C122.933 42.0983 128.528 49.51 128.627 49.2786C128.652 49.2201 128.44 48.7063 128.159 48.1365ZM83.1742 45.6363C80.97 41.147 77.6399 35.653 76.1355 34.0227C75.3883 33.2138 75.3186 33.1706 75.3136 33.5216C75.3036 34.2745 77.1517 37.7133 79.498 41.2971C80.9052 43.4463 83.782 47.376 83.8766 47.2768C83.914 47.2387 83.5977 46.4985 83.1742 45.6363ZM23.8655 45.214C23.9327 44.2551 23.3947 42.8104 21.5242 38.9062C20.386 36.5305 19.7334 35.3529 19.2602 34.8213C17.7134 33.079 17.6985 34.9714 19.2328 38.6493C20.0497 40.6103 21.6637 43.9499 22.122 44.6341C23.1407 46.1526 23.7858 46.3662 23.8655 45.2166V45.214ZM94.9927 39.86C94.1359 37.6446 91.3463 31.9116 90.3948 30.4084C89.2516 28.6025 87.5504 26.2904 87.2864 26.1861C85.9389 25.6596 88.4421 31.6267 91.553 36.3678C93.2965 39.0232 94.3824 40.5518 95.0574 41.3047C95.6452 41.9584 95.6228 41.4904 94.9902 39.8574L94.9927 39.86ZM106.445 39.8091C105.912 37.9346 103.598 32.9112 102.475 31.1816C101.638 29.8946 100.587 28.6788 100.081 28.4117C99.7051 28.2133 99.6129 28.2108 99.4361 28.3914C99.2592 28.572 99.2617 28.6966 99.456 29.2612C99.9317 30.6373 101.476 33.4097 103.563 36.6272C106.547 41.2309 106.993 41.7218 106.447 39.8066L106.445 39.8091ZM85.0672 34.3838C84.3673 32.9137 83.1518 31.0926 82.8704 31.0926C82.3448 31.0926 84.0933 34.595 85.2415 35.8464C85.8866 36.5484 85.8144 35.9583 85.0672 34.3864V34.3838ZM39.5968 33.7174C38.8297 31.1129 36.6154 26.6872 36.0799 26.6872C35.8483 26.6872 35.9056 27.2137 36.2269 28.0454C37.0986 30.3015 39.6292 35.0146 39.7562 34.6204C39.7861 34.5263 39.7164 34.1193 39.5968 33.7149V33.7174ZM50.7178 28.3736C50.4239 26.9085 49.4675 23.6427 48.7601 21.6867C48.1748 20.0741 46.6356 16.8032 46.1847 16.2182L45.8933 15.8392V16.2945C45.8834 18.0165 48.4089 25.535 50.1773 29.04C50.7651 30.2049 50.8722 30.3448 50.9121 29.9887C50.937 29.7598 50.8523 29.0323 50.7203 28.3736H50.7178ZM32.1944 27.3969C32.035 26.354 31.0064 23.2967 30.4061 22.081C29.639 20.5269 28.0823 18.342 27.7435 18.342C27.1333 18.342 28.5655 22.231 30.4011 25.5503C31.4372 27.4274 32.0624 28.3787 32.1994 28.2947C32.2667 28.2515 32.2667 27.8471 32.1994 27.3969H32.1944ZM79.3684 26.2726C78.8404 24.7236 76.4817 20.2903 75.1865 18.4209C74.5589 17.5128 73.6647 16.5234 73.4729 16.5234C73.1865 16.5234 73.5252 17.8257 74.1629 19.1737C75.2438 21.4552 77.0745 24.2226 78.5615 25.8174C79.2663 26.5753 79.5179 26.7152 79.3684 26.2726ZM105.87 22.2692C104.831 19.4688 102.203 14.2648 100.597 11.8281C99.7225 10.5004 99.3813 10.1977 99.3813 10.7395C99.3813 11.0752 101.805 15.9995 103.082 18.2657C104.114 20.0919 106.121 23.3451 106.181 23.284C106.206 23.2586 106.066 22.8008 105.87 22.2692ZM38.2369 20.3336C37.0189 15.3916 35.6366 11.3169 34.9965 10.7802C34.593 10.4419 34.1471 10.6988 34.1471 11.2686C34.1471 12.0392 34.5008 13.0872 35.9928 16.7244C37.7587 21.0305 38.6653 23.022 38.7226 22.7194C38.7475 22.5871 38.5283 21.5138 38.2369 20.3336ZM93.5132 19.7638C92.5866 16.9762 91.4534 14.3258 90.4297 12.5581C88.9602 10.0197 88.4097 9.59747 88.5891 11.149C88.8904 13.7586 91.7423 19.8885 93.5456 21.7935C94.3351 22.6278 94.3276 22.2208 93.5107 19.7664L93.5132 19.7638ZM82.442 15.0431C82.442 13.7128 80.3199 8.48088 79.7819 8.48088C79.0322 8.48088 80.2302 12.4589 81.5628 14.3971C82.2079 15.3356 82.4445 15.5086 82.4445 15.0431H82.442Z"
          fill="#D4AF85"
        />
      </svg>

      <Image
        width={538}
        height={134}
        src="/assets/home-hero-mobile.png"
        alt="Imagem com cafés da Oxente Café"
        className="mx-auto md:hidden"
      />

      <Image
        width={884}
        height={382}
        src="/assets/home-hero-desktop.png"
        alt="Imagem com cafés da Oxente Café"
        className={`
          hidden md:flex absolute z-20
          left-1/2 -translate-x-1/2 
          top-1/2 -translate-y-[calc(50%+100px)] lg:-translate-y-[calc(50%+60px)]
          w-[90%] max-w-[884px]
        `}
      />

      <Image
        width={1578}
        height={278}
        src="/assets/elementos-hero-desktop.png"
        alt="Imagem com cafés da Oxente Café"
        className="max-[767px]:hidden min-w-[1578px] absolute top-[20px] lg:top-[60px] left-1/2 lg:-translate-x-1/2"
      />

      <div className="relative z-10 px-5 pt-8 pb-[72px] lg:pb-[98px] md:mt-auto bg-[#CDA981] lg:bg-transparent">
        <div className="w-full max-w-[884px] mx-auto lg:grid lg:grid-cols-[1fr_346px]">
          <div className="lg:border-r-2 lg:space-y-1 lg:border-r-[#251F1A]">
            <h2 className="font-primary text-[42px]/[42px] text-center lg:text-left tracking-[-1.68px]">
              Aqui, café é coisa séria!
            </h2>

            <p className="text-center lg:text-lg lg:text-left max-w-[347px] lg:max-w-full mx-auto lg:ml-0">
              <span className="italic font-semibold underline">
                Valorizamos os produtores locais, selecionamos grãos com rigor e
                torramos artesanalmente
              </span>{" "}
              para oferecer uma bebida que respeita a tradição e entrega sabor
              de verdade.
            </p>
          </div>

          <div className="w-full ml-auto lg:w-fit">
            <h3 className="text-center lg:text-2xl mt-5 lg:mt-0 mb-3 lg:mb-5 tracking-[-1px] font-bold text-[20px]">
              Bora sentir esse sabor?
            </h3>

            <a
              href="https://wa.me/558182799240"
              className="relative flex duration-200 hover:scale-105 items-center justify-center gap-2 w-full max-w-[320px] lg:w-[312px] h-[55px] mx-auto"
            >
              <FaWhatsapp size={20} color="#251F1A" className="relative z-10" />

              <span className="font-semibold -tracking-[0.9px] relative z-10">
                Fale com a gente no WhatsApp!
              </span>

              <Image fill src="/assets/elementos/botao-2.png" alt="Design" />
            </a>
          </div>
        </div>
      </div>

      <Image
        width={1928}
        height={418}
        src="/assets/hero-design.png"
        alt="Detalhe de design"
        className="absolute bottom-0 left-0 max-[1023px]:hidden w-full aspect-[1928/418] h-[418px]"
      />

      <Image
        width={578}
        height={42}
        src="/assets/section-design.png"
        alt="Detalhe de design"
        className="absolute bottom-0 left-0 w-full aspect-[480/42] max-h-[42px]"
      />
    </section>
  );
}
