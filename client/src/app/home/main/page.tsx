
import { getProducts } from "@/components/helpers/api/query/getProducts";
import { IProduct } from "@/components/types/type";
import styles from '@/components/style/main.module.css';
import MainContainer from "@/components/ui/blocks/containers/MainContainer";

async function page():Promise<JSX.Element> {
  const products:IProduct[] = await getProducts();
  return (
    <main className={styles.container}>
      <MainContainer
        data={products}
       />
    </main>
  )
}

export default page