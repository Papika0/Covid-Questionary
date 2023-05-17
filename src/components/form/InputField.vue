<template>
    <div class="flex flex-col w-500">
        <label for={{name}} class=" font-bold text-2xl text-primary mb-3">{{ label }}</label>
        <input type="text" :placeholder="placeholder" name={{name}} v-model="value" @input="validate"
            class="h-12 bg-primary border-0.8 border-primary pl-5 placeholder:text-primary text-lg">
        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        placeholder: String,
        name: String,
        oldValue: String,
        type: {
            type: String,
            default: "text"
        }
    },
    data() {
        return {
            value: "" || this.oldValue,
            error: "",
        };
    },
    methods: {
        validate() {
            const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            const redberryPattern = /@redberry\.ge$/;
            this.error = "";

            if (this.value.length < 2) {
                this.error = `${this.label.slice(0, -1)}ს ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან`;
            } else if (this.type === "email" && !emailPattern.test(this.value)) {
                this.error = "თქვენ მიერ შეყვანილი მეილი არასწორია";
            } else if (this.type === "email" && !redberryPattern.test(this.value)) {
                this.error = "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
            }
        }
    },

};
</script>

