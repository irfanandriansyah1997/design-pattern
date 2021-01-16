/**
 * Sample Singleton
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.16
 */
class Singleton {
    private static instance: Singleton;

    /**
     * Get Instance
     * @returns {Singleton}
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            console.debug('damn');
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

export default Singleton;
