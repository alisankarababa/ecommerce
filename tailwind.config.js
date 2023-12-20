/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        
        extend: {
            
            screens: {
                "xs": "440px"

            },

            gridTemplateColumns: {
                'autofill-minmax20rem1fr': "repeat(auto-fit, minmax(20rem, 1fr))",
                "autofill-minmax14.75rem1fr": "repeat(auto-fit, minmax(14.75rem, 1fr))",
                "autofit-minmax9.125rem1fr": "repeat(auto-fit, minmax(9.125rem, 1fr))",
                "autofit-minmax12.875rem1fr": "repeat(auto-fit, minmax(12.875rem, 1fr))",
                "2-9/8": "minmax(20rem, 9fr) minmax(20rem, 8fr)"
            },


            colors: {
                "clr-disabled-element": "var(--disabled-element-color)",
                "clr-primary": "var(--primary-color)",
                "clr-dark": "var(--dark-color)",
                "clr-secondary-1": "var(--secondary-color-1)",
                "clr-secondary-2": "#3C403D",
                "clr-second": "#737373",
                "clr-light": "var(--light-color)",
                "clr-success": "var(--success-color)",
                "clr-alert": "var(--alert-color)",
                "clr-danger": "var(--danger-color)",
                "clr-hover": "var(--hover-color)",
                "clr-muted": "var(--muted-color)",
                "clr-light-gray-1": "var(--light-gray-1)",
                "clr-light-gray-2": "var(--light-gray-2)",
            },
            
            backgroundColor: {
                
                "bgclr-dark": "var(--dark-color)",
                "bgclr-light": "var(--light-color)",
                "bgclr-primary": "var(--primary-color)",
                "bgclr-secondary-1": "var(--secondary-color-1)",
                "bgclr-alert": "var(--alert-color)",
                "bgclr-ligth-gray-1": "var(--light-gray-1)",
                "bgclr-ligth-gray-2": "var(--light-gray-2)",
                
                "bgclr-success": "var(--success-color)",
                "bgclr-hover": "var(--hover-color)",


            },

            fontFamily: {
                "fnt-mont" : [ "Montserrat", "sans-serif" ]
            },
       
            "success-color": "#2DC071",
            "alert-color": "#E77C40",
            "danger-color": "#E74040",
            "hover-color": "#2A7CC7",
            "disabled-element-color": "#8EC2F2",
            "muted-color": "#BDBDBD",
            "light-gray-1": "#FAFAFA",
            "light-gray-2": "#ECECEC",
            
            "faded-primary-color": "var(--faded-primary-color)",
            "faded-secondary-color-1": "#B9EAA8",
            "faded-secondary-color-2": "#FFDCD1",
            "light background": "#FFFFFF"
      },
    },
    plugins: [],
  }