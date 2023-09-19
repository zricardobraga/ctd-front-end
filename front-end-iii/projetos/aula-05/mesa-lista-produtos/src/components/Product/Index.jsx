import styles from './Product.module.css'

export default function Product({product}){
    return(
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <h3>{product.nome}</h3>
                <img className={styles.cardUserImage} src={product.image} alt={`imagem do produto ${product.nome}`} />
                <h3>{product.preco}</h3>
            </div>
        </div>
    )

}
