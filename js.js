// Create a variable to hold your NFTs
const nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, rarity) {
    const nft = {
        name: name,
        description: description,
        rarity: rarity
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (const nft of nfts) {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Rarity: " + nft.rarity);
        console.log("-------------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("NFT 1", "Description for NFT 1", "Common");
mintNFT("NFT 2", "Description for NFT 2", "Rare");
mintNFT("NFT 3", "Description for NFT 3", "Legendary");

listNFTs();

console.log("Total NFTs minted: " + getTotalSupply());
