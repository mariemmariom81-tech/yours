/* ================= Tailwind Custom Configuration ================= */

tailwind.config = {

    /* تفعيل الوضع الليلي باستخدام class */
    darkMode: "class",

    theme: {
        extend: {

            /* الألوان المخصصة */
            colors: {
                "primary": "#a6322c",
                "background-light": "#ffffff",
            },

            /* الخطوط المخصصة */
            fontFamily: {
                "display": ["Plus Jakarta Sans"],
                "elegant": ["Playfair Display", "serif"]
            },

            /* التحكم في انحناء الحواف */
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },

            /* تعريف الأنيميشن */
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'heart-float': 'heart-float 4s ease-in-out infinite',
                'lid-hover': 'lid-hover 2s ease-in-out infinite',
            },
            

            /* تعريف الحركات (keyframes) */
            keyframes: {

                /* حركة الطفو */
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },

                /* تأثير التوهج */
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.15)' },
                },

                /* حركة القلوب */
                'heart-float': {
                    '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
                    '50%': { transform: 'translateY(-25px) scale(1.3)', opacity: '0.6' },
                },

                /* حركة غطاء الهدية */
                'lid-hover': {
                    '0%, 100%': { transform: 'translateY(0) rotate(-4deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(-6deg)' },
                }
            }
        },
    },
}