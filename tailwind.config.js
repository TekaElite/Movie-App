/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        525: "525px",
      },
      colors: {
        mygrey: "var(--gray-300, #D1D5DB)",
        darkgrey: " var(--gray-400, #9CA3AF)",
        mywhite: "var(--white, #FFF)",
        myred: "var(--rose-700, #BE123C);",
        mypurple: "var(--gray-900, #111827);",
        borderpruple: "rgba(0, 0, 0, 0.30);",
        borderred: "rgba(190, 18, 60, 0.70);",
        bgrey: "rgba(248, 231, 235, 0.40)",
        myblack: "rgba(51, 51, 51, 0.80)",
        lightgrey: "#666",
        darktext: "#333",
        blightgrey: "C7C7C7",
        textred: "#BE123C",
        textgrey: "#404040",
        textpurple: "#B91C1C",
        borderwhite: "#F8E7EB",
        textwhite: "#E8E8E8",
        bp: "rgba(18, 18, 18, 0.50)",
      },

      backgroundImage: {
        poster:
          "url(https://s3-alpha-sig.figma.com/img/154e/382f/b7e8be84d7248b8b9812172cad1cd0c9?Expires=1695600000&Signature=OsNLaMa8CnSNnQeUuaSqQc4ItYP-nbUj0fcZVpScVICd8NzZdIEz80MJBNhEju2IQOUMxTFuDw4FavRj8rGqkBK6uLeq0vJG~Y-EPhP~LInckDsnzuQ5Y2BdrMTWOqkPaFdDAPmQXSLpWteihqFaB2f2VQGC6Za5gHu7t3hq62C0X21qB-8H7osPvHdFmh0c-B881mmDx6JQCfpUQRzNHAjMxdvS~LrFQthLfxQb29n8J4z25KNx4cSOzRDCMXJaP0gpPcPRXMYrFdz-nbt~yFJLM37b1YLKasT2gd5K2x6nxGQWVPlwAafWCDzo3TzVihPSl0FiwjfkbBREka5jUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
      },

      borderRadius: {
        3: "0px 45px 45px 0px",
      },
      fontFamily: {
        poppins: "Poppins",
        Dmsans: "DM+Sans",
      },
    },
  },
  plugins: [],
};
