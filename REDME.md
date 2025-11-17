#### Question 1: What are some differences between interfaces and types in TypeScript?

Answer:  ইন্টারফেস কেবল অবজেক্ট এর shape এর ক্ষেত্রে use করা হয়. আর টাইপ সকল প্রিমিটিভ এবং নন-প্রিমিটিভ ডাটা উভয় ক্ষেত্রে use করা হয়. ইন্টারফেস এক্সটেন্ড করা যায়, টাইপ এক্সটেন্ড করা যায় না তবে ইউনিয়ন এবং ইন্টারসেকশন করা যায়।

#### Question 2: What is the use of the keyof keyword in TypeScript? Provide an example.

Answer 2: keyof টাইপ অথবা ইন্টারফেস এর key গুলো কে নিয়ে union এর মাধ্যমে string literel টাইপ এ পরিণত করে

```bash
type User = {
  id: number;
  name: string;
  active: boolean;
};

keyof User -> "id" | "name" | "active"
```
