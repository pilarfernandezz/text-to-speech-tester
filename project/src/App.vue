<template>
    <the-header></the-header>
    <main-page></main-page>
</template>

<script>
export default {
    data() {
        return {
            solutions: [
                { 
                    id: 'IBM',
                    title: 'IBM Watson',
                    description: 'IBM Watson description',
                    url: 'http://localhost:8080/img/IBM.4152d25c.png'
                },
                { 
                    id: 'AWS',
                    title: 'Amazon Polly',
                    description: 'Amazon Polly description',
                    url: 'http://localhost:8080/img/AWS.a4e56b7d.jpg'
                },
                { 
                    id: 'Google',
                    title: 'Google Cloud',
                    description: 'Google description',
                    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX///9ChfT7vAXqQzU0qFP7uQA7gfSGrPcrpk1Wj/VLr2R/w477ugD7twAzqUo7l6/pNiXwPyIwffPpLxs7gvQviPzqPi8qevPcuBvBWXv8wAD8yU8ep1XpNyf7vwDP3fze6P3+8NHpMR7oKhP/+/qqxPnpOje0y/punvb98fH73tzylI71trLsXVPzo5785ePrTD/s8v7+9N77xDf7wB+y2rv50c/3wLzynZfucGjwhn/vfXXrSj3C1ftLivSRtPj80G3a5fzzhyH/+u9glvX8y1n+7Mf94ad1ovadvPnsV0v1rqq90fv4x8SNsfjtWy7wdSj1mBr3phXsUzHvayv91oL935/81H3+7MiTzqnt9/DZ7d5kuXmCuMf92pC938VbtXH2Oe9jAAAKIUlEQVR4nO2da1fbRhCGLYMMBMlRZVVuQxWIZSC+crfDpeCEO06bkBTSkpTk//+KShiDbEv2zO6sZHr2/URyguUnMzszOzuSUikpKSkpKSkpKSkpKSkpKSkpKSkpqXFSqdxoVtv1N5VK5U29XW02yqWkvxKVSo1qZfvCcAsFw3C6MoxCwTUutivVcjHpL8ilcnVn1SNzbHsiTLbteKSrO9WVpL8ok0rNXSNnhKP1gRo5Z7f5xJx2pV1zQXSPlG6t/WRMWWrXcg4G7x7ScWvVp2DJxi7MN8MtmdttJA0wQtW9HCvePWRur5o0RLSKdYfZfEFDOvXxTCHFNwWHG68jxxhHxrpBxddhbCcN1KembRDy+TLsZtJQAa3UcsR8vnK1sUmQFZc/voTJdt8kjXanxh7lAuyVsVdOGk+cATuy3UrCfCsX1BGmX8ZFoquxyVnBQGQXEgyqO65wPl/uTkJ8xZpoD+3KqCVS4qxMiPfQruyJBBZjoxAfoB9TY08bTTdGvomJn37N/x4vYDVuwJ+V/HKcgO34ARUlv/g/B4wTMSFAJTZHjT3IdAE9xPdxADaSA/QQ58UDriQJ6CEuiAYsidsMQgAVxVoTTHgRZyUTAqhYM2IBd2M1YQigomSmRAK2RXSccICKYgrMGWV3DACFRpu9OBdhJKCi7IsC3IlzEQ4BFLYU/3A5vrBtG4Vc4e5Y0Xa8n4yIk28IoKjEX2S2oO3knFql2lgpdZoRxdJKo1qpOUPOUYcDelYUQciYKGzD3W6Hb9DL7e2Is/BRgEL8lK0cddzt5rAuUrG57Q7+z40EFOKnqwwn84ZdH30wX6rbfYYEAAqIp21857CwCj2vrq4WsICKSbwdLqIBHQdzHl+1H3wVBugh0hJWkGEGfzDWPeGBAiqZPykBSy4O0GA43Fy5a6GDAb1gQ7mP2sWFGbfOdJW6iwFUrDM6QNy+3rZZ+9NlDCCpEXcwJnQ4jlGKRxkEIV3aL2F2hYVdrmudmQhEk8qImECa4z2VPkAgZg5I+CJy4dK9en/M8U9PYBCJcmK1n9CH+fDx3eUnXX/RkaZ/unz38cOEQzEegkAkamj0tteWlj5/vPTJXr58mX6U9yfv7/TW6Tr/BafgiCSNt3IuiPeXTxdE65Wm6unWCe+Z9GtwRM2/JSB8SBU+XnoI3QOlrh+f8F0TbEOS0u1+FS5NvNMBeF1I9YrHXdfyYER+wD/uNjZLny9fvADidSGPX7FfdRm6FE3+w2+/JF36/AlsviDjHDvjawtGaPHXNY7nn5cMfPeMrL66BjUit5s2CkvvGPk6jC3GwAr1U5O3YVP5oOPW3wCjdsp25RmYn3JXbpd8fL70uUOWK88D4ylfS2p9k5sv7ZcBTOnxCGZEa4Zjh3GqaxSEnhmvGK7+FmhEiz1jfNFp+DypGwyeCjSiV7sxrsU5lQzQ89Q0Pm/8Dq7AzdcMfIebRB7aRdTx6R8K6EXUffRiXE/TAnrS0fHmHN61sRQk4rpGDughYjPjAmK7b2VQiEIAGay4Dyf0QioC8VAMIB4R4aYeInyYqEi/Bh8QceHmLaa3qFjg8mZDGKBXpeLyIopQyRzBPrVFmQcHEDdRhNBt4r1M0G7xmq6SCUU8xhCiFqICay++EguYVucwhPCy5l6AeSlxUYYBEJUROxoZbVpjBYgNNcroA6kTsT6KBkSUpl2NmEMR66N4QPgOKqBhn/dFZKJgAcSmC1/DOjfrQn2UBTA1xWDDIaffcyJ9lAkwNYVMiL6syP3w3yJNyAaY+pOBMPpESmA9ygqYOmAhtCLqU5GZghWQjTAqYwhchcyAjIThK5ElkGqapqqqNmrDzA6YOshnGKJpeHmKrtc0Xd9sXV2fXl+1NnR9CCUHYGp+8XxqxjSxlgyr3Q5xJtT09NVJYDf76nYzqkHOA9jlPFBM5E5x8ENOMeWMpm8MdlxetUIZCQDvII9QRXjIRhGTKtTN8I7S+tygIxAB+oz7mObiQMJAxBlNv438Fidq338UHaCnc/AAQ0jpdg12Uk0b1i873Oj5IFLAVOqtBV6NA3PgYCfVNkd0y44DiMSAqdTaPhSx303BkXQkYBCRHNATGLEvmkIrNi0N6Hd2iyMRgPBdf9+56Regk+qgU8BOp0AMILg51bcRBi5D4OnRXWAWBAieQ+m9YbgIi6TaBvBLXKniAMG9m56FCGwDw3zUl0hA6FyfGdwHw0o2rQX+EqdQazMJ1troKdyuQMsQbkLBghmxJ9SANr+aQMdDCtRj7NkGg+YuVMYBNQF6DwqnwWAKc1Km8TQhgs1mBgYzi5BQCk4VcQg0uJh//PegrZP2JTmgAYEaVIHhDFA6HKNlCKxrzIWHfw8ixI80CdQ8iPAx5cMIOUbvyQUaQwkMSD89QtAGQxKONaEYL/3fRxr1OkGifi0iswUs47cS4xkUaP8UaJnCqjbcRJpYgQZPA1UbsPIel+0htPK2Ar8BakSN0UIEFW09rahj0A54fDYXoK1Fz1MlbmFuOi4ZEXY3TeY88CvATtS4tDFgg1Jm8GGnwLM1/e/EoIIC3hAVSIdeuoC1vMckYUDvTOz5JWBXX2W5B41a58Cufu/xGizUjEVxCr3zsifQIEbaEk/74LnovhuEQXWbL01NFnENPFnTP28CHvnS1CSz4gIYcGDwCzFOg74FjU7v4cMYAwM1mJEo/Tih7vcZz7QJajJRU6MnasRpMYOYbguZTsRNl6q//HMTK97aooWb+gq5vxszmqj98tt09sfW15jwFhaP8sjpRCvkY2CnpF3AycnJ6ens9LNvs0j9O4XU6xnTRA4mRtyRAJ9s6wB2NI1U9rmZQQk+5xVU+A0JoG1wHyBa2edMY81IRTxSEWhELsCYCKPu0YP1MrgA4yGMfComxIicgPEQRt9mOXqYnRcwFsIhtyAejipOuQFjIRz26IERdznzA8ZBOPwp0UMHawgAYyAc8RKTYcGGAjAGwlF3c99GLkUSQPGE5vlwwOiuGw2gcMKoG/MCioinRIDCCSGPcAndKFIBiiaEvTLhdhCRDFAw4ehF2NFxv6PSAYolNMFPae/r2RACCiWEPp7GV09ApQQUSYh6X1kxUNuQAgokRL6Q7RGRFlAcYQb9DMx7RyUGFEaIWYNd3T02kRpQFCHTgxP9R1+SAwoizDM+1vtUJwcUQ8j+jtn1yeknQJhRFlgBPc1mx54QXsiE6/s0rRmpCTMm9yuCb2jNSEto5UneF/T1GSEjKaG5T/V+uS06VyUkNC3KV66SMZIRmhnqN61vTWYpIGkILXNfxCtzv37L8luSgNAyzTNRLyC/2frBC8lLaJn5o2Whr+a++T6b5aHkIcyYnvXei37zuK+vW7PPprOdU2s8IfZplpZlZXw2c2ZqeSEGugfdfN/6Z/bbj2dYPd+fweno6GzqfHk+DtNJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkJ1X+trobhqK2pCgAAAABJRU5ErkJggg=='
                },
                { 
                    id: 'Microsoft',
                    title: 'Microsoft Azure',
                    description: 'Microsoft description',
                    url: 'http://localhost:8080/img/Microsoft.8fa2eda8.jpg'
                }
            ]
        };
    },
    provide(){
        return {
            solutions: this.solutions
        };
    },
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 50rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #000080;
  background-color: #000080;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #0000CD;
  border-color: #0000CD;
}
</style>