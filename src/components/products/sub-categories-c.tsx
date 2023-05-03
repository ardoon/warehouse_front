import Category from "@/models/category";
import { addCategory, addSubCategory } from "@/store/slices/categoriesSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../partials/dashboard/list-item";
import ListItemInput from "../partials/dashboard/list-item-input";
import SectionHeading from "../partials/dashboard/section-heading";

export default function SubCategoriesC({ title, categories, id }: {
    title?: string,
    id: string,
    categories: Category[] | undefined
}) {

    const dispatch = useDispatch<AppDispatch>();

    const add = (cate: Category) => {
        dispatch(addSubCategory({category: cate, key: id}));
    }

    return (

        <section>

            <SectionHeading title='زیر دسته ها' search={true} />

            <ul className="space-y-6">

                <ListItemInput id="categoryName" add={add} placeHolder="نام دسته جدید را وارد کنید.." />
                {
                    categories?.map((category) => {
                        return <ListItem key={category.id} label={category.name} link={`/dashboard/products/`} slug='[category]' id={category.id} />
                    })
                }

            </ul>

        </section>

    )
}