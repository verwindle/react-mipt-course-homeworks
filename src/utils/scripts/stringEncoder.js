export const string2IDEncoder = 
    function (string) {
        let encodedID;
        const empty = (s) => s.length ? false : true;

        String.prototype.hexEncode = function() {
            let result = "";
            for (let i=0; i<this.length; i++) {
                const hex = this.charCodeAt(i).toString(16);
                result += ("000"+hex).slice(-4);
            }
        
            return result;
        };    

        function randomId(arrInt) {
            const uint32 = window.crypto.getRandomValues(new Uint32Array(arrInt))[0];
            return uint32.toString(16);
        }

        if (empty(string)) { return ''; }
        encodedID = ("" + string.hexEncode()).split("");
        encodedID.forEach((n, i, arr) => { arr[i] = parseInt(n); });
        encodedID = randomId(encodedID);

        return encodedID;
    };
