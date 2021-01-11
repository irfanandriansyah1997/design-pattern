/**
 * Product 1
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.11
 */
class Product1 {
    private parts: string[] = [];

    /**
     * Add Part
     * @returns {void}
     */
    public addPart(part: string): void {
        if (this.parts.indexOf(part) === -1) {
            this.parts.push(part);
        }
    }

    /**
     * Get List Parts
     * @returns {void}
     */
    public listParts(): string {
        return `Product parts: ${this.parts.join(', ')}`;
    }
}

export default Product1;
